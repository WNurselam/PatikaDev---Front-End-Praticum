import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe("Header Render Test",()=> {
    let header; 
    beforeEach(()=>{   //Her test işleminden önce yapılacak olan işlem belirteme
        render(<App/>) // Her test işleminden önce render alacak component.
        header = screen.getByText("Emoji Search")
        //"Emoji Search" metni bulup ve header değişkenine atıyourux
    });
    test('Document should be have HeaderComponent', () => {
        expect(header).toBeInTheDocument() // header dökümanda DOM'da mevcut olup olmadığını kontrol ediyoruz
    });
})

// Özet olarak header component'in doğru bir şekilde render edilmesinin kontrolünü yapıyoruz.