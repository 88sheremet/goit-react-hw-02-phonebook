// import { Component } from 'react';

export const ContactList = ({contacts,onRemoveContact}) => {
    return (
    <>
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>{`${contact.name} : ${contact.number}`}
                    <button
                        //  className={s.delBtn}
                        type='button'
                        name='delete'
                    onClick={()=>onRemoveContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
        
    );
}