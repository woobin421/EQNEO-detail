// ✅ 색상 확대 모달 열기/닫기 로직
window.openColorModal = function(imgSrc, title, subtitle) {
    const modal = document.getElementById('colorModal');
    const modalImg = document.getElementById('colorModalImg');
    const modalTitle = document.getElementById('colorModalTitle');
    const modalSubtitle = document.getElementById('colorModalSubtitle');
    const modalLine = document.getElementById('colorModalLine');
    
    // 데이터 설정
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalSubtitle.innerText = subtitle;
    
    // 색상별 띠(Line) 디자인 분기
    if (title === 'BEIGE') {
        modalLine.className = 'w-10 h-2 bg-[#d2c9b8] border border-stone-300 mb-3';
    } else {
        modalLine.className = 'w-10 h-2 bg-slate-900 mb-3';
    }
    
    // 애니메이션 클래스 제어
    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        document.getElementById('colorModalBox').classList.remove('scale-95', 'opacity-0');
        document.getElementById('colorModalBox').classList.add('scale-100', 'opacity-100');
    }, 10); // 약간의 지연 후 스케일 애니메이션 실행
    
    // 모달 열릴 때 배경 스크롤 방지
    document.body.style.overflow = 'hidden';
};

window.closeColorModal = function() {
    const modal = document.getElementById('colorModal');
    const modalBox = document.getElementById('colorModalBox');
    
    // 애니메이션 역재생
    modalBox.classList.remove('scale-100', 'opacity-100');
    modalBox.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = ''; // 배경 스크롤 복구
    }, 300); // 0.3초 애니메이션 종료 후 완전히 숨김
};

document.addEventListener('DOMContentLoaded', () => {
    // ✅ 모든 주요 섹션 스크롤 애니메이션 (Reveal)
    const revealTargets = document.querySelectorAll('.reveal-target');
    if (revealTargets.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    // 한 번 나타나면 다시 숨기지 않음
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // 화면에 10% 이상 보일 때 트리거

        revealTargets.forEach(target => revealObserver.observe(target));
    }

    // FAQ 아코디언 로직
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all others
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.faq-btn').forEach(el => {
                el.setAttribute('aria-expanded', 'false');
                el.querySelector('i').style.transform = 'rotate(0deg)';
            });

            // Toggle current
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ✅ 5단 속도 제어 바(Bar) 그래프 스크롤 애니메이션 로직
    const speedContainer = document.getElementById('speed-bar-container');
    const speedBars = document.querySelectorAll('.speed-bar');
    
    if (speedContainer && speedBars.length > 0) {
        const speedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    speedBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.width = bar.getAttribute('data-width');
                        }, index * 150);
                    });
                    speedObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        speedObserver.observe(speedContainer);
    }

    // ✅ 배터리 바(Bar) 그래프 스크롤 애니메이션 로직
    const batteryContainer = document.getElementById('battery-bar-container');
    const batteryBars = document.querySelectorAll('.battery-bar');
    
    if (batteryContainer && batteryBars.length > 0) {
        const batteryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    batteryBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.width = bar.getAttribute('data-width');
                        }, index * 200);
                    });
                    batteryObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        batteryObserver.observe(batteryContainer);
    }

    // ✅ 스마트 BMS 내장 스크롤 애니메이션 로직 (아이템 순차적 등장)
    const bmsContainer = document.getElementById('bms-list-container');
    const bmsItems = document.querySelectorAll('.bms-item');
    
    if (bmsContainer && bmsItems.length > 0) {
        const bmsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bmsItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.remove('opacity-0', 'translate-y-8');
                            item.classList.add('opacity-100', 'translate-y-0');
                        }, index * 200); // 0.2초 간격으로 하나씩 올라오며 나타남
                    });
                    bmsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        bmsObserver.observe(bmsContainer);
    }

    // ✅ 완벽을 위한 디테일(섹션 8) 스크롤 애니메이션 로직 (아이템 개별 등장)
    const detailItems = document.querySelectorAll('.detail-item');
    if (detailItems.length > 0) {
        const detailObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    detailObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        detailItems.forEach(item => detailObserver.observe(item));
    }
});
