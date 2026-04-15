tailwind.config = {
    theme: {
        extend: {
            /* ✅ Tailwind 기본 폰트를 Paperlogy로 완전히 덮어씌움 */
            fontFamily: {
                sans: ['Paperlogy', 'sans-serif'],
            },
            colors: {
                primary: '#1E3A8A', /* 딥 블루 (신뢰/안전) */
                secondary: '#166534', /* 포레스트 그린 (평온함) */
                bgWarm: '#FBF9F6', /* 웜 베이지 (눈부심 방지) */
                textDark: '#1E293B', /* 차콜 (가독성 극대화) */
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        }
    }
}
