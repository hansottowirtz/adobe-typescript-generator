/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * A set of variables and their associated dynamic data which 
		 * will be used for dynamic publishing.
		 */
		class DataSet extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The name of this dataset. */
			public name: string;
			/**
			 * Displays the dynamic data that has been captured in the 
			 * dataset.
			 */
			public display(): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Re-apply the dynamic data of the active dataset to the 
			 * artboard.
			 */
			public update(): void;
		}
	}
}