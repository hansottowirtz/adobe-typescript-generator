/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as 
		 * an SVG file
		 */
		class ExportOptionsSVG extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** should the exported file be compressed ( default: false ) */
			public compressed: boolean;
			/**
			 * decimal precision for element coordinate values ( 1 - 7; 
			 * default: 3 )
			 */
			public coordinatePrecision: number;
			/**
			 * how should the CSS properties of the document be included in 
			 * the document ( default: 
			 * SVGCSSPropertyLocation.STYLEATTRIBUTES )
			 */
			public cssProperties: Adobe.Illustrator.SVGCSSPropertyLocation;
			/**
			 * how should the text in the document be encoded ( default: 
			 * SVGDocumentEncoding.ASCII )
			 */
			public documentEncoding: Adobe.Illustrator.SVGDocumentEncoding;
			/**
			 * the version of DTD that the exported file should be 
			 * conforming to ( default: SVGDTDVersion.SVG1_1 )
			 */
			public DTD: Adobe.Illustrator.SVGDTDVersion;
			/**
			 * should the raster images in the exported file be included ( 
			 * default: false )
			 */
			public embedRasterImages: boolean;
			/**
			 * what font glyphs should be included in the exported file ( 
			 * default: SVGFontSubsetting.ALLGLYPHS )
			 */
			public fontSubsetting: Adobe.Illustrator.SVGFontSubsetting;
			/**
			 * the type of font that should be included in the exported 
			 * file ( default: SVGFontType.CEFFONT )
			 */
			public fontType: Adobe.Illustrator.SVGFontType;
			/** ( default: false ) */
			public includeFileInfo: boolean;
			/** ( default: false ) */
			public includeVariablesAndDatasets: boolean;
			/** ( default: false ) */
			public optimizeForSVGViewer: boolean;
			/**
			 * preserve Illustrator editing capabilities when exporting the 
			 * document ( default: false )
			 */
			public preserveEditability: boolean;
			/** preserve slice data in exported document ( default: false ) */
			public slices: boolean;
			/** is SVG auto kerning allowed? ( default: false ) */
			public sVGAutoKerning: boolean;
			/** is SVG text-on-path construct allowed? ( default: false ) */
			public sVGTextOnPath: boolean;
		}
	}
}