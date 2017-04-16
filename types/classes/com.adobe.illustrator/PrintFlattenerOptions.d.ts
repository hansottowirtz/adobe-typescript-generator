/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the transparency flattening options */
		class PrintFlattenerOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * whether to clip complex regions ( default: false )
			 * @type {boolean}
			 */
			public clipComplexRegions: boolean;
			/**
			 * whether to convert all strokes to outlines ( default: false 
			 * )
			 * @type {boolean}
			 */
			public convertStrokesToOutlines: boolean;
			/**
			 * whether to convert all text to outlines ( default: false )
			 * @type {boolean}
			 */
			public convertTextToOutlines: boolean;
			/**
			 * the flattening balance ( 0 - 100; default: 100 )
			 * @type {number}
			 */
			public flatteningBalance: number;
			/**
			 * the gradient resolution ( 1.0 - 9600.0; default: 300.0 )
			 * @type {number}
			 */
			public gradientResolution: number;
			/**
			 * overprint ( default: PDFOverprint.PRESERVEPDFOVERPRINT )
			 * @type {Adobe.Illustrator.PDFOverprint}
			 */
			public overprint: Adobe.Illustrator.PDFOverprint;
			/**
			 * the rasterization resolution ( 1.0 - 9600.0; default: 300.0 
			 * )
			 * @type {number}
			 */
			public rasterizationResolution: number;
		}
	}
}