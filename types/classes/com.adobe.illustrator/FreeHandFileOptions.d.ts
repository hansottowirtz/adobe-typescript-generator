/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a FreeHand file. */
		class FreeHandFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Should all text be converted to outlines (default: false) */
			public convertTextToOutlines: boolean;
			/**
			 * If true, only the specified page number, as set in the page 
			 * to open property, will be imported (default: true)
			 */
			public importSinglePage: boolean;
			/**
			 * What page should be used when opening a multipage document; 
			 * valid only if the import single page property is true 
			 * (default: 1)
			 */
			public pageToOpen: number;
		}
	}
}