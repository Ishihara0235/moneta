import Flag from "~/plugins/flag";
const flag = new Flag("edit");

export const state = flag.state;
export const getters = flag.getters;
export const mutations = flag.mutations;
export const actions = {
    ...flag.actions,
    off: ({ commit }) => commit("edit", false),
}
