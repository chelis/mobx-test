import { computed, observable } from 'mobx';

class ObservableProjectsStore {
	@observable projects = [];	

	addProject(task) {
		this.projects.push({
			name: name
		});
	}

    @computed get projectCount() {
        return this.projects.length ;
    }
}

const observableProjectsStore = new ObservableProjectsStore();
export default observableProjectsStore;