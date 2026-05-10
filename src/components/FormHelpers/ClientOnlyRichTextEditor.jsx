"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor = ({ value, onChange }) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: value,
		onUpdate({ editor }) {
			onChange(editor.getHTML());
		},
	});

	if (!editor) {
		return null;
	}

	return (
		<>
			<div className="tip-tap-editor border rounded p-2">
				<div
					className="toolbar-btn d-flex mb-2 align-items-center"
					style={{ gap: "10px" }}
				>
					<button
						type="button"
						onClick={() =>
							editor.chain().focus().toggleBold().run()
						}
						className={
							editor.isActive("bold")
								? "font-bold text-success"
								: ""
						}
					>
						<i className="bx bx-bold"></i>
					</button>
					<button
						type="button"
						onClick={() =>
							editor.chain().focus().toggleItalic().run()
						}
						className={
							editor.isActive("italic")
								? "fst-italic text-success"
								: "fst-italic"
						}
					>
						<i className="bx bx-italic"></i>
					</button>
					<button
						type="button"
						onClick={() =>
							editor.chain().focus().toggleBulletList().run()
						}
						className={
							editor.isActive("bulletList") ? "text-success" : ""
						}
					>
						<i className="bx bx-list-ul"></i>
					</button>
					<button
						type="button"
						onClick={() =>
							editor.chain().focus().toggleOrderedList().run()
						}
						className={
							editor.isActive("orderedList") ? "text-success" : ""
						}
					>
						<i className="bx bx-list-ol"></i>
					</button>
					<button
						type="button"
						onClick={() => editor.chain().focus().undo().run()}
					>
						<i className="bx bx-undo"></i>
					</button>
					<button
						type="button"
						onClick={() => editor.chain().focus().redo().run()}
					>
						<i className="bx bx-redo"></i>
					</button>
				</div>
				<EditorContent
					editor={editor}
					className="border p-2 rounded"
					style={{ minHeight: "250px" }}
				/>
			</div>

			<style jsx>{`
				.tip-tap-editor button {
					border: 0;
					font-size: 16px;
				}
			`}</style>
		</>
	);
};

export default TiptapEditor;
