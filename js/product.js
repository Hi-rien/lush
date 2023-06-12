
    // 상품 이미지 교체

    const roll = document.querySelectorAll('.roll a')
    const productImg = document.querySelectorAll('.product_img li')

    for (let i = 0; i < roll.length; i++) {
      roll[i].addEventListener('click', slide)

      function slide(e) {
        for (let i = 0; i < roll.length; i++) {
          roll[i].classList.remove('on')
          productImg[i].classList.remove('now')
        }
        roll[i].classList.add('on')
        productImg[i].classList.add('now')
        e.preventDefault
      }
    }



    // 상품 수량 / 금액

    const pulsBtn = document.querySelector('.plus')
    const minusBtn = document.querySelector('.minus')
    const quan = document.querySelector('.quan')
    const price = document.querySelector('#price')

    let quanValue = Number(quan.value)
    let priceValue = Number(price.value)

    pulsBtn.addEventListener('click', function() {
      if (quanValue >= 10 ) {return false}
      quanValue += 1
      quan.setAttribute('value',quanValue)
      let totalPrice = quanValue * priceValue
      price.setAttribute('value', totalPrice)
    })
    minusBtn.addEventListener('click', function() {
      if (quanValue == 1) { return false}
      quanValue -= 1
      quan.setAttribute('value',quanValue)
      let totalPrice = quanValue * priceValue
      price.setAttribute('value', totalPrice)
    })

    // cart 나오는 부분

    const pushBtn = document.querySelector('.push')
    const hidden = document.querySelector('#hidden')

    pushBtn.addEventListener('click', function() {
      if (hidden.className == 'show') {
        hidden.classList.remove('show')
      } else {
        hidden.classList.add('show')
      }
    })
