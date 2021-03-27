import { computed, reactive } from 'vue'
import _ from 'lodash'
import json from '../data/result.20210318.json'

const state = reactive({
    results: json,
    patternFilter: '',
})

const filteredResult = computed(() => {
    return _.pickBy(state.results, (value, key) => {
        return key.includes(state.patternFilter.trim())
    })
})



export default {
    state,
    filteredResult
}