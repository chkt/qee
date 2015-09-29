import Queue from './Queue';



export default class TransformQueue extends Queue {
	process(data) {
		for (let trn of this) data = trn(data);

		return data;
	}
}