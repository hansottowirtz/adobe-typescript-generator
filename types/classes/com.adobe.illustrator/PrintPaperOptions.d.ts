/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintPaperOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the custom height (in points) for using the custom paper ( 
			 * default: 0.0 )
			 */
			public height: number;
			/** the paper's name */
			public name: string;
			/**
			 * custom offset (in points) for using the custom paper ( 
			 * default: 0.0 )
			 */
			public offset: number;
			/**
			 * whether to transverse the artwork (rotate 90 degrees) on the 
			 * custom paper ( default: false )
			 */
			public transverse: boolean;
			/**
			 * the custom width (in points) for using the custom paper ( 
			 * default: 0.0 )
			 */
			public width: number;
		}
	}
}