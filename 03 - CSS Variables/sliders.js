var spacingAmountElement = document.querySelector('input[name="spacing"]')
var blurAmountElement    = document.querySelector('input[name="blur"]')
var baseColorElement     = document.querySelector('input[name="base"]')

var spacingAmount = spacingAmountElement.value
var blurAmount    = blurAmountElement.value
var baseColor     = baseColorElement.value

var image = document.querySelector('img')

function adjustImage() {
  image.style.border = 'solid ' + (spacingAmount * .1) + 'px ' + baseColor
  image.style.filter = 'blur(' + (blurAmount * .1)  + 'px)'
}

spacingAmountElement.addEventListener('change', function(e) {
  spacingAmount = e.target.value
  adjustImage()
})

blurAmountElement.addEventListener('change', function(e) {
  blurAmount = e.target.value
  adjustImage()
})

baseColorElement.addEventListener('change', function(e) {
  baseColor = e.target.value
  adjustImage()
})
