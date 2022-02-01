import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))
    

    return (
        <section className="pan sidebar">
            <nav className={`sidebar--header ${props.darkMode ? "dark": ""}`}>
                <div 
                    className="toggler" 
                >
                    <p className="toggler--light">Light</p>
                    <div 
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
                <h3>Notebook</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </nav>
            <div className={`notesElm ${props.darkMode ? "dark": ""}`}>
                {noteElements}
            </div>
        </section>
    )
}
