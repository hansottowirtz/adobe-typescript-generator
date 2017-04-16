/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the PostScript options */
		class PrintPostScriptOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * whether to print in binary mode ( default: false )
			 * @type {boolean}
			 */
			public binaryPrinting: boolean;
			/**
			 * use PostScript level 1 compatible gradient and gradient mesh 
			 * printing ( default: false )
			 * @type {boolean}
			 */
			public compatibleShading: boolean;
			/**
			 * whether to force continuous tone ( default: false )
			 * @type {boolean}
			 */
			public forceContinuousTone: boolean;
			/**
			 * the image compression type ( default: 
			 * PostScriptImageCompressionType.IMAGECOMPRESSIONNONE )
			 * @type {Adobe.Illustrator.PostScriptImageCompressionType}
			 */
			public imageCompression: Adobe.Illustrator.PostScriptImageCompressionType;
			/**
			 * whether to print in negative mode ( default: false )
			 * @type {boolean}
			 */
			public negativePrinting: boolean;
			/**
			 * the PostScript language level ( default: 
			 * PrinterPostScriptLevelEnum.PSLEVEL2 )
			 * @type {Adobe.Illustrator.PrinterPostScriptLevelEnum}
			 */
			public postScriptLevel: Adobe.Illustrator.PrinterPostScriptLevelEnum;
			/**
			 * the shading resolution ( 1.0 - 9600.0; default: 300.0 )
			 * @type {number}
			 */
			public shadingResolution: number;
		}
	}
}