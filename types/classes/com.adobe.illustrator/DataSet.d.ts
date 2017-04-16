/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * A set of variables and their associated dynamic data which 
		 * will be used for dynamic publishing
		 */
		class DataSet extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the name of this dataset
			 * @type {string}
			 */
			public name: string;
			/**
			 * displays the dynamic data that has been captured in the 
			 * dataset.
			 * @returns {void}
			 */
			public display(): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * re-apply the dynamic data of the active dataset to the 
			 * artboard
			 * @returns {void}
			 */
			public update(): void;
		}
	}
}