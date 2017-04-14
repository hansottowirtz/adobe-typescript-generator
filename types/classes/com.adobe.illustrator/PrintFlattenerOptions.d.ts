/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintFlattenerOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** whether to clip complex regions ( default: false ) */
			public clipComplexRegions: boolean;
			/**
			 * whether to convert all strokes to outlines ( default: false 
			 * )
			 */
			public convertStrokesToOutlines: boolean;
			/** whether to convert all text to outlines ( default: false ) */
			public convertTextToOutlines: boolean;
			/** the flattening balance ( 0 - 100; default: 100 ) */
			public flatteningBalance: number;
			/** the gradient resolution ( 1.0 - 9600.0; default: 300.0 ) */
			public gradientResolution: number;
			/** overprint ( default: PDFOverprint.PRESERVEPDFOVERPRINT ) */
			public overprint: Adobe.Illustrator.PDFOverprint;
			/**
			 * the rasterization resolution ( 1.0 - 9600.0; default: 300.0 
			 * )
			 */
			public rasterizationResolution: number;
		}
	}
}