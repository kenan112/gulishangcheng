let myPlugins = {}

myPlugins.install = function (Vue, options) {
    //Vue.prototype
    //Vue.directive
    Vue.directive(options.name, (element, b) => {
        element.innerHTML = b.value.toUpperCase()
    })
}


export default myPlugins