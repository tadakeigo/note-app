import React from 'react';
import type { Note } from "@/app/notes/type";
import parse from 'html-react-parser';

type NoteProps = {
    note: Note;
};

const Note = ({note}: NoteProps) => {
    return (
        <div className='flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5'>
            <h3 className='text-pink-500 text:lg md:text-xl font-semibold'>
                {note.title}
            </h3>
                {parse(note.content)}
        </div>
    )
};

export default Note;