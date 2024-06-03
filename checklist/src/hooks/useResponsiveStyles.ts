/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export const useResponsiveStyles = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        control: (provided: any) => ({
            ...provided,
            background: '#81878E',
            border: 'none',
            width: isMobile ? '100px' : '240px' 
        }),
        menu: (provided: any) => ({
            ...provided,
            background: '#81878E',
        }),
        menuList: (provided: any) => ({
            ...provided,
            padding: 0,
            maxHeight: 'none',
            overflowY: 'auto',
          }),
        indicatorsContainer: (provider: any) => ({
            ...provider,
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center',
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            background: 'transparent',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            background: state.isSelected ? '#69503d' : '#81878E',
            color: state.isSelected ? '#fff' : '#000',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
        }),
        input: (provided: any) => ({
            ...provided,
            caretColor: "transparent"
        })
    }
}