import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'
import emojiList from '../emojiList.json' // emoji listesini dahil etme

describe('Emoji Result Test', () => {
    beforeEach(()=>{  // Her test işleminden önce yapılacak olan işlem belirteme
        render(<App/>) // Her test işleminden önce render alacak component.
    })
    test("emoji list render", () => {
        let emojiResult = emojiList.slice(0, 20);
        //emojiList dizisinin ilk 20 öğesi alınarak eemojiResult adlı bir değişkene atıyoruz
        emojiResult.map((item) => { // Map fonksiyonu ile aldığımız emojiler ile tek tek üzerinden geçiyoruz
            expect(screen.getByText(item.title)).toBeInTheDocument()
            //emojiList.json'dan aldığımız titlerlar dökümanda olmasını kontrol ediyoruz. 
        })
    })
})


/*   
  Özet olarak emoji listesi bileşeninin doğru şekilde render edilmesini kontrol ediyoruz.
*/