import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'


describe("Emoji Result",() =>{
    let listElement;
    beforeEach(()=>{ // Her test işleminden önce yapılacak olan işlem belirteme
        render(<App/>) // Her test işleminden önce render alacak component.
        listElement = screen.getByText("Grinning") 
        // Liste elemanlarından Grining text'i içeren elamana ulaşma.
    })
    test("copy to clickboard test",()=>{
        userEvent.click(listElement) // Grinning textine tıklama
        expect(listElement.parentElement.getAttribute("data-clipboard-text")).toMatch("😀")
        /* listElement elemanının üst elemanının "data-clipboard-text" özelliğinin değerini döndürür. 
        toMatch fonksiyonu, bu değerin belirtilen değere ("😀") eşit olup olmadığını kontrol ediyoruz */
    })
})

/* 
  Özet şu şekilde "Grinning" metni içeren elemanın tıklanması durumunda, data-clipboard-text 
  özelliğinin "😀" olup olmadığını kontrol ediyoruz.
*/