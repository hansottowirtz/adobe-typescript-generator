/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the page marks options */
		class PrintPageMarksOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the bleed offset rect
			 * @type {any[]}
			 */
			public bleedOffsetRect: any[];
			/**
			 * whether to enable color bars printing ( default: false )
			 * @type {boolean}
			 */
			public colorBars: boolean;
			/**
			 * the page marks offset rect
			 * @type {any[]}
			 */
			public marksOffsetRect: any[];
			/**
			 * whether to enable page info marks printing ( default: false 
			 * )
			 * @type {boolean}
			 */
			public pageInfoMarks: boolean;
			/**
			 * the page marks style ( default: PageMarksTypes.Roman )
			 * @type {Adobe.Illustrator.PageMarksTypes}
			 */
			public pageMarksType: Adobe.Illustrator.PageMarksTypes;
			/**
			 * whether to enable registration marks printing ( default: 
			 * false )
			 * @type {boolean}
			 */
			public registrationMarks: boolean;
			/**
			 * whether to enable trim marks printing ( default: false )
			 * @type {boolean}
			 */
			public trimMarks: boolean;
			/**
			 * stroke weight of trim marks ( minimum 0.0; default: 0.125 )
			 * @type {number}
			 */
			public trimMarksWeight: number;
		}
	}
}