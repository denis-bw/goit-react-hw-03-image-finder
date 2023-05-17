import css from './Searchbar.module.css'
import React, { Component } from "react";

 export default class Searchbar extends Component {
     
     handleSubmit = (e) => {
        e.preventDefault();
        const { inputFind } = e.currentTarget;
        this.props.onSubmit(inputFind.value);
        inputFind.value = '';
     }
     
     
     render() {
         return <header className={css.Searchbar}>
             <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                 <button type="submit" className={css.SearchForm_button}>
                     <span className={css.SearchForm_button_label}>Search</span>
                 </button>

                 <input
                     className={css.SearchForm_input}
                     type="text"
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                     name='inputFind'
                 />
             </form>
         </header>
     }
}