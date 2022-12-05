import interact from "interactjs"

const interactBoxes = (boxRef) => {
    return interact('.draggable')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            listeners: {
                move: dragMoveListener,
            }
        })

    function dragMoveListener(event) {
        const x = (parseFloat(boxRef.getAttribute('data-x')) || 0) + event.dx
        const y = (parseFloat(boxRef.getAttribute('data-y')) || 0) + event.dy
        boxRef.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        boxRef.setAttribute('data-x', x)
        boxRef.setAttribute('data-y', y)
    }
}

export default interactBoxes;