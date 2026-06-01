"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

const fredoka = { fontFamily: "'Fredoka One', cursive" } as const;
const ADMIN_PASSWORD = "123456";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  links: Record<string, string>;
  created_at: string;
};

const emptyForm = {
  title: "",
  category: "Website",
  image: "",
  description: "",
  technologies: "",
  live: "",
  github: "",
  figma: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "2.5px solid #111",
  borderRadius: 12,
  fontFamily: "'Fredoka One', cursive",
  fontSize: 14,
  color: "#111",
  background: "#fff",
  boxShadow: "3px 3px 0 #111",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  ...fredoka,
  fontSize: 12,
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  color: "#555",
  marginBottom: 6,
  display: "block",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  // ── Image upload state ─────────────────────────────────────────────────
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  async function fetchProjects() {
    setLoading(true);
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects((data as Project[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    if (authed) fetchProjects();
  }, [authed]);

  function showToast(msg: string, type: "success" | "error" = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  // ── Handle file pick ───────────────────────────────────────────────────
  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setForm((f) => ({ ...f, image: "" })); // clear old URL until uploaded
  }

  // ── Upload image to Supabase Storage ──────────────────────────────────
  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return form.image || null;
    setUploading(true);

    const fd = new FormData();
    fd.append("file", imageFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const json = await res.json();
    setUploading(false);

    if (!res.ok) {
      showToast("Image upload failed: " + json.error, "error");
      return null;
    }

    return json.url;
  }

  // ── Save project ───────────────────────────────────────────────────────
  async function handleSave() {
    if (!form.title.trim()) return showToast("Title is required", "error");
    if (!imageFile && !form.image)
      return showToast("Please upload an image", "error");

    setSaving(true);
    const imageUrl = await uploadImage();
    if (!imageUrl) {
      setSaving(false);
      return;
    }

    const payload = {
      title: form.title.trim(),
      category: form.category.trim(),
      image: imageUrl,
      description: form.description.trim(),
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      links: {
        ...(form.live ? { live: form.live.trim() } : {}),
        ...(form.github ? { github: form.github.trim() } : {}),
        ...(form.figma ? { figma: form.figma.trim() } : {}),
      },
    };

    const { error } = editId
      ? await supabase.from("projects").update(payload).eq("id", editId)
      : await supabase.from("projects").insert(payload);

    setSaving(false);
    if (error) return showToast(error.message, "error");

    showToast(editId ? "Project updated!" : "Project added!");
    resetForm();
    fetchProjects();
  }

  function resetForm() {
    setForm(emptyForm);
    setEditId(null);
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleEdit(p: Project) {
    setEditId(p.id);
    setForm({
      title: p.title,
      category: p.category,
      image: p.image ?? "",
      description: p.description ?? "",
      technologies: (p.technologies ?? []).join(", "),
      live: p.links?.live ?? "",
      github: p.links?.github ?? "",
      figma: p.links?.figma ?? "",
    });
    setImagePreview(p.image ?? "");
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: number) {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    setDeleteId(null);
    if (error) return showToast(error.message, "error");
    showToast("Project deleted!");
    fetchProjects();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LOGIN SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (!authed)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');`}</style>
        <div
          style={{
            background: "#fff",
            border: "2.5px solid #111",
            borderRadius: 20,
            padding: "40px 36px",
            boxShadow: "6px 6px 0 #111",
            width: 340,
          }}
        >
          <div
            style={{
              background: "#FFE033",
              border: "2px solid #111",
              borderRadius: 10,
              padding: "4px 14px",
              display: "inline-block",
              marginBottom: 16,
              boxShadow: "2px 2px 0 #111",
            }}
          >
            <span
              style={{
                ...fredoka,
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Admin
            </span>
          </div>
          <h1 style={{ ...fredoka, fontSize: 28, margin: "0 0 24px" }}>
            Sign in
          </h1>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => {
              setPwInput(e.target.value);
              setPwError(false);
            }}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              (pwInput === ADMIN_PASSWORD ? setAuthed(true) : setPwError(true))
            }
            placeholder="Enter password"
            style={{
              ...inputStyle,
              marginBottom: 8,
              borderColor: pwError ? "#e55" : "#111",
            }}
          />
          {pwError && (
            <p
              style={{
                ...fredoka,
                fontSize: 12,
                color: "#e55",
                marginBottom: 12,
              }}
            >
              Wrong password
            </p>
          )}
          <button
            onClick={() =>
              pwInput === ADMIN_PASSWORD ? setAuthed(true) : setPwError(true)
            }
            style={{
              width: "100%",
              marginTop: 8,
              padding: "11px",
              background: "#111",
              color: "#FFE033",
              border: "2.5px solid #111",
              borderRadius: 12,
              ...fredoka,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "3px 3px 0 #555",
            }}
          >
            Enter →
          </button>
        </div>
      </div>
    );

  // ─────────────────────────────────────────────────────────────────────────
  // ADMIN DASHBOARD
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        padding: "40px 24px",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800&display=swap');`}</style>

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 999,
            background: toast.type === "success" ? "#FFE033" : "#fee",
            border: `2.5px solid ${toast.type === "success" ? "#111" : "#e55"}`,
            borderRadius: 12,
            padding: "12px 20px",
            boxShadow: "4px 4px 0 #111",
            ...fredoka,
            fontSize: 14,
            color: "#111",
          }}
        >
          {toast.msg}
        </div>
      )}

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <div>
            <div
              style={{
                background: "#FFE033",
                border: "2px solid #111",
                borderRadius: 10,
                padding: "3px 12px",
                display: "inline-block",
                marginBottom: 8,
                boxShadow: "2px 2px 0 #111",
              }}
            >
              <span
                style={{
                  ...fredoka,
                  fontSize: 11,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Admin Panel
              </span>
            </div>
            <h1 style={{ ...fredoka, fontSize: 36, margin: 0 }}>Projects</h1>
          </div>
          <button
            onClick={() => setAuthed(false)}
            style={{
              ...fredoka,
              fontSize: 13,
              background: "#fff",
              border: "2px solid #111",
              borderRadius: 10,
              padding: "8px 16px",
              cursor: "pointer",
              boxShadow: "3px 3px 0 #111",
            }}
          >
            Sign out
          </button>
        </div>

        {/* ── Form ── */}
        <div
          style={{
            background: "#fff",
            border: "2.5px solid #111",
            borderRadius: 20,
            padding: "28px 28px",
            boxShadow: "5px 5px 0 #111",
            marginBottom: 36,
          }}
        >
          <h2 style={{ ...fredoka, fontSize: 20, margin: "0 0 22px" }}>
            {editId ? "✏️ Edit project" : "＋ Add new project"}
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {/* Title */}
            <div>
              <label style={labelStyle}>Title *</label>
              <input
                style={inputStyle}
                placeholder="e.g. KALKUS"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
              />
            </div>

            {/* Category */}
            <div>
              <label style={labelStyle}>Category</label>
              <select
                style={inputStyle}
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
              >
                {["Website", "Application", "Design", "Other"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* ── Image Upload ── */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Project Image *</label>

              {/* Drop zone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: "2.5px dashed #111",
                  borderRadius: 14,
                  padding: imagePreview ? 0 : "32px 20px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: imagePreview ? "#000" : "#fafafa",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: imagePreview ? 180 : "auto",
                  transition: "background .2s",
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file && file.type.startsWith("image/")) {
                    setImageFile(file);
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
              >
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="preview"
                      style={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* Overlay on hover */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity .2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0")
                      }
                    >
                      <span
                        style={{ ...fredoka, color: "#FFE033", fontSize: 14 }}
                      >
                        Click to change image
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>🖼️</div>
                    <p
                      style={{
                        ...fredoka,
                        fontSize: 13,
                        color: "#888",
                        margin: 0,
                      }}
                    >
                      Click or drag & drop to upload
                    </p>
                    <p
                      style={{
                        ...fredoka,
                        fontSize: 11,
                        color: "#bbb",
                        margin: "4px 0 0",
                      }}
                    >
                      PNG, JPG, WEBP up to 5MB
                    </p>
                  </>
                )}
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFilePick}
              />

              {/* File name badge */}
              {imageFile && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 10,
                  }}
                >
                  <span
                    style={{
                      ...fredoka,
                      fontSize: 12,
                      background: "#FFE033",
                      border: "2px solid #111",
                      borderRadius: 8,
                      padding: "3px 10px",
                      boxShadow: "2px 2px 0 #111",
                    }}
                  >
                    {imageFile.name}
                  </span>
                  <button
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(editId ? form.image : "");
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    style={{
                      ...fredoka,
                      fontSize: 11,
                      background: "#fff",
                      border: "2px solid #e55",
                      borderRadius: 8,
                      padding: "3px 10px",
                      cursor: "pointer",
                      color: "#e55",
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Description */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Description</label>
              <textarea
                style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                placeholder="Short description of the project..."
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
            </div>

            {/* Technologies */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Technologies (comma separated)</label>
              <input
                style={inputStyle}
                placeholder="Next.js, Tailwind CSS, Supabase"
                value={form.technologies}
                onChange={(e) =>
                  setForm((f) => ({ ...f, technologies: e.target.value }))
                }
              />
            </div>

            {/* Links */}
            <div>
              <label style={labelStyle}>Live URL</label>
              <input
                style={inputStyle}
                placeholder="https://..."
                value={form.live}
                onChange={(e) =>
                  setForm((f) => ({ ...f, live: e.target.value }))
                }
              />
            </div>
            <div>
              <label style={labelStyle}>GitHub URL</label>
              <input
                style={inputStyle}
                placeholder="https://github.com/..."
                value={form.github}
                onChange={(e) =>
                  setForm((f) => ({ ...f, github: e.target.value }))
                }
              />
            </div>
            <div>
              <label style={labelStyle}>Figma URL</label>
              <input
                style={inputStyle}
                placeholder="https://figma.com/..."
                value={form.figma}
                onChange={(e) =>
                  setForm((f) => ({ ...f, figma: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              onClick={handleSave}
              disabled={saving || uploading}
              style={{
                ...fredoka,
                fontSize: 14,
                background: "#FFE033",
                border: "2.5px solid #111",
                borderRadius: 12,
                padding: "11px 28px",
                cursor: "pointer",
                boxShadow: "3px 3px 0 #111",
                opacity: saving || uploading ? 0.6 : 1,
              }}
            >
              {uploading
                ? "Uploading image…"
                : saving
                  ? "Saving…"
                  : editId
                    ? "Update project"
                    : "Add project"}
            </button>
            {editId && (
              <button
                onClick={resetForm}
                style={{
                  ...fredoka,
                  fontSize: 14,
                  background: "#fff",
                  border: "2.5px solid #111",
                  borderRadius: 12,
                  padding: "11px 20px",
                  cursor: "pointer",
                  boxShadow: "3px 3px 0 #111",
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* ── Project list ── */}
        <h2 style={{ ...fredoka, fontSize: 20, marginBottom: 16 }}>
          All projects ({projects.length})
        </h2>

        {loading ? (
          <p style={{ ...fredoka, color: "#aaa" }}>Loading…</p>
        ) : projects.length === 0 ? (
          <p style={{ ...fredoka, color: "#aaa" }}>
            No projects yet. Add one above!
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {projects.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "#fff",
                  border: "2.5px solid #111",
                  borderRadius: 16,
                  padding: "14px 18px",
                  boxShadow: "4px 4px 0 #111",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 48,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "2px solid #111",
                    flexShrink: 0,
                    background: "#f5f5f5",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ ...fredoka, fontSize: 15, margin: 0 }}>
                    {p.title}
                  </p>
                  <p
                    style={{
                      ...fredoka,
                      fontSize: 11,
                      color: "#888",
                      margin: 0,
                    }}
                  >
                    {p.category} · {(p.technologies ?? []).join(", ")}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                  <button
                    onClick={() => handleEdit(p)}
                    style={{
                      ...fredoka,
                      fontSize: 12,
                      background: "#FFE033",
                      border: "2px solid #111",
                      borderRadius: 10,
                      padding: "7px 14px",
                      cursor: "pointer",
                      boxShadow: "2px 2px 0 #111",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(p.id)}
                    style={{
                      ...fredoka,
                      fontSize: 12,
                      background: "#fff",
                      border: "2px solid #e55",
                      borderRadius: 10,
                      padding: "7px 14px",
                      cursor: "pointer",
                      boxShadow: "2px 2px 0 #e55",
                      color: "#e55",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Delete confirm modal ── */}
      {deleteId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "2.5px solid #111",
              borderRadius: 20,
              padding: "32px 28px",
              boxShadow: "6px 6px 0 #111",
              width: 320,
              textAlign: "center",
            }}
          >
            <p style={{ ...fredoka, fontSize: 18, marginBottom: 8 }}>
              Delete project?
            </p>
            <p
              style={{
                ...fredoka,
                fontSize: 13,
                color: "#888",
                marginBottom: 24,
              }}
            >
              This can't be undone.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                onClick={() => handleDelete(deleteId)}
                style={{
                  ...fredoka,
                  fontSize: 14,
                  background: "#e55",
                  color: "#fff",
                  border: "2px solid #e55",
                  borderRadius: 12,
                  padding: "10px 22px",
                  cursor: "pointer",
                  boxShadow: "3px 3px 0 #a00",
                }}
              >
                Yes, delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                style={{
                  ...fredoka,
                  fontSize: 14,
                  background: "#fff",
                  border: "2.5px solid #111",
                  borderRadius: 12,
                  padding: "10px 22px",
                  cursor: "pointer",
                  boxShadow: "3px 3px 0 #111",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
