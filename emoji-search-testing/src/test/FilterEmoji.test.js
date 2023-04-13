import React from 'react'
import '@testing-library/jest-dom'
import { render, screen,fireEvent } from '@testing-library/react'
import App from '../App'


describe('Emoji filter', () => {
    let inputElement;
  
    beforeEach(() => {
      render(<App />);
      inputElement = screen.getByRole('textbox');
      // İnput elementini seçiyoruz
    });
  
    test('filter test', () => {
      const filterValue = 'Grinning'; // Bulmak istedğimiz eleman 
      fireEvent.change(inputElement, { target: { value: filterValue } });  
      // input değeri değiltiriliyor ve değeri değişen ile var olup olmadığını kontrol ediyoruz
      expect(screen.getByText(filterValue)).toBeInTheDocument();
      // Bulmak istediğimiz eleman dökümanda var mı diye konrol ediyoruz
    });
  });


  /* Özet olarak  input öğesine bir değer girildiğinde, doğru bir şekilde 
  filtreleme yapılıp yapılmadığını kontrol etmek için testini yazıyoruz */