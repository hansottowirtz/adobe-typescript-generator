/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the paper options */
		class PrintPaperOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the custom height (in points) for using the custom paper ( 
			 * default: 0.0 )
			 * @type {number}
			 */
			public height: number;
			/**
			 * the paper's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * custom offset (in points) for using the custom paper ( 
			 * default: 0.0 )
			 * @type {number}
			 */
			public offset: number;
			/**
			 * whether to transverse the artwork (rotate 90 degrees) on the 
			 * custom paper ( default: false )
			 * @type {boolean}
			 */
			public transverse: boolean;
			/**
			 * the custom width (in points) for using the custom paper ( 
			 * default: 0.0 )
			 * @type {number}
			 */
			public width: number;
		}
	}
}