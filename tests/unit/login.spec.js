import Login from "../../src/views/Iniciar_sesion.vue"
import {mount} from "@vue/test-utils"

describe("mount component Login",()=>{
    it("it renders the component",()=>{
        const wrapper = mount(Login)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
