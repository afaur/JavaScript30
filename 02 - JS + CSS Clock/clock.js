setInterval(() => {
  const current = new Date()

  const hour = current.getHours()
  const minutes = current.getMinutes()
  const seconds = current.getSeconds()

  const hourHand = document.querySelector('.hour-hand')
  const minuteHand = document.querySelector('.min-hand')
  const secondHand = document.querySelector('.second-hand')

  hourHand.style.transform = 'rotate(' + ((hour / 12) * 360 + 90) + 'deg)'
  minuteHand.style.transform = 'rotate(' + ((minutes / 60) * 360 + 90) + 'deg)'
  secondHand.style.transform = 'rotate(' + ((seconds / 60) * 360 + 90) + 'deg)'
})
