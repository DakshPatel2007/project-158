AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },
    handlePlacesSelected:function(){
        const id = this.el.getAttribute("id")
        const posterId = ["spider-man","batman","captain-america","super-man"]
        if(posterId.includes(id)){
            const posterContainer = document.querySelector("#places-container")
            posterContainer.setAttribute("cursor-listener",{selectedItemId:id})
            this.el.setAttribute("material",{color:"blue"})

        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesSelected()
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{color:"white"})
                }
            }
        })
    }
})