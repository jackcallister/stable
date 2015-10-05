import h from 'virtual-dom/h'
import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import createElement from 'virtual-dom/create-element'

function render(count) {
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)])
}

let count = 0
let tree = render(count)

const rootNode = createElement(tree)
document.getElementById('app').appendChild(rootNode)

setInterval(function () {
  count++

  const newTree = render(count)
  const patches = diff(tree, newTree)

  patch(rootNode, patches)
  tree = newTree
}, 1000)
