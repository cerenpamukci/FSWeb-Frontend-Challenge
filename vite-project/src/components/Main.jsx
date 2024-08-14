import React from 'react';

function Main({ language }) {
  return (
    <main>
      <div className="profile">
        <h1>
          {language === 'EN' ? 'Creative thinker Minimalism lover' : 'Yaratıcı düşünür Minimalist sever'}
        </h1>
        <p>
          {language === 'EN' 
            ? "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who crafts solid and scalable frontend products with great user experiences, Let's shake hands with me."
            : "Merhaba, ben Almila. Ben bir full-stack geliştiricisiyim. Güçlü ve ölçeklenebilir frontend ürünleri oluşturan bir geliştirici arıyorsanız, el sıkışalım."
          }
        </p>
        <button>{language === 'EN' ? 'Hire me' : 'Beni işe al'}</button>
        <button>GitHub</button>
        <button>LinkedIn</button>
      </div>
    </main>
  );
}

export default Main;
