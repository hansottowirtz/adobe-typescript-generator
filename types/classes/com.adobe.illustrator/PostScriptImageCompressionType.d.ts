/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PostScriptImageCompressionType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PostScriptImageCompressionType}
			 * @readonly
			 */
			public static readonly IMAGECOMPRESSIONNONE: Adobe.Illustrator.PostScriptImageCompressionType;
			/**
			 * @type {Adobe.Illustrator.PostScriptImageCompressionType}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Illustrator.PostScriptImageCompressionType;
			/**
			 * @type {Adobe.Illustrator.PostScriptImageCompressionType}
			 * @readonly
			 */
			public static readonly RLE: Adobe.Illustrator.PostScriptImageCompressionType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}