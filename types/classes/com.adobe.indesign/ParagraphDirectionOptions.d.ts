/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Left to Right paragraph direction
			 * @type {Adobe.Indesign.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Left to Right paragraph 
			 * direction
			 * @type {Adobe.Indesign.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly leftToRightDirection: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Right to Left paragraph direction
			 * @type {Adobe.Indesign.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Right to Left paragraph 
			 * direction
			 * @type {Adobe.Indesign.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly rightToLeftDirection: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}