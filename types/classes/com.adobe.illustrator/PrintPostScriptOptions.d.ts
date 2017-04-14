/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintPostScriptOptions extends IllustratorHostObject {
			/** whether to print in binary mode ( default: false ) */
			public binaryPrinting: boolean;
			/**
			 * use PostScript level 1 compatible gradient and gradient mesh 
			 * printing ( default: false )
			 */
			public compatibleShading: boolean;
			/** whether to force continuous tone ( default: false ) */
			public forceContinuousTone: boolean;
			/**
			 * the image compression type ( default: 
			 * PostScriptImageCompressionType.IMAGECOMPRESSIONNONE )
			 */
			public imageCompression: PostScriptImageCompressionType;
			/** whether to print in negative mode ( default: false ) */
			public negativePrinting: boolean;
			/**
			 * the PostScript language level ( default: 
			 * PrinterPostScriptLevelEnum.PSLEVEL2 )
			 */
			public postScriptLevel: PrinterPostScriptLevelEnum;
			/** the shading resolution ( 1.0 - 9600.0; default: 300.0 ) */
			public shadingResolution: number;
		}
	}
}