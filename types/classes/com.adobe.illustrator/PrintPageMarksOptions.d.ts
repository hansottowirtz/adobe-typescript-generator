/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the page marks options */
		class PrintPageMarksOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the bleed offset rect */
			public bleedOffsetRect: any[];
			/** whether to enable color bars printing ( default: false ) */
			public colorBars: boolean;
			/** the page marks offset rect */
			public marksOffsetRect: any[];
			/**
			 * whether to enable page info marks printing ( default: false 
			 * )
			 */
			public pageInfoMarks: boolean;
			/** the page marks style ( default: PageMarksTypes.Roman ) */
			public pageMarksType: Adobe.Illustrator.PageMarksTypes;
			/**
			 * whether to enable registration marks printing ( default: 
			 * false )
			 */
			public registrationMarks: boolean;
			/** whether to enable trim marks printing ( default: false ) */
			public trimMarks: boolean;
			/** stroke weight of trim marks ( minimum 0.0; default: 0.125 ) */
			public trimMarksWeight: number;
		}
	}
}