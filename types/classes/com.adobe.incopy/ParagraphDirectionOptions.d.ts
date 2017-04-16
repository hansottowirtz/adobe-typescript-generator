/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Left to Right paragraph direction
			 * @type {Adobe.Incopy.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Left to Right paragraph 
			 * direction
			 * @type {Adobe.Incopy.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly leftToRightDirection: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Right to Left paragraph direction
			 * @type {Adobe.Incopy.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Right to Left paragraph 
			 * direction
			 * @type {Adobe.Incopy.ParagraphDirectionOptions}
			 * @readonly
			 */
			public static readonly rightToLeftDirection: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}