/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextWrapModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Wraps text around the object's bounding box.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly BOUNDING_BOX_TEXT_WRAP: Adobe.Incopy.TextWrapModes;
			/**
			 * Alias for BOUNDING_BOX_TEXT_WRAP. Wraps text around the 
			 * object's bounding box.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly boundingBoxTextWrap: Adobe.Incopy.TextWrapModes;
			/**
			 * Alias for CONTOUR. Wraps text around the object following 
			 * the specified contour options.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly contour: Adobe.Incopy.TextWrapModes;
			/**
			 * Wraps text around the object following the specified contour 
			 * options.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly CONTOUR: Adobe.Incopy.TextWrapModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Forces text to jump above or below the object, so that no 
			 * text appears on the object's right or left.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly JUMP_OBJECT_TEXT_WRAP: Adobe.Incopy.TextWrapModes;
			/**
			 * Alias for JUMP_OBJECT_TEXT_WRAP. Forces text to jump above 
			 * or below the object, so that no text appears on the object's 
			 * right or left.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly jumpObjectTextWrap: Adobe.Incopy.TextWrapModes;
			/**
			 * Forces text to jump to the next available column.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly NEXT_COLUMN_TEXT_WRAP: Adobe.Incopy.TextWrapModes;
			/**
			 * Alias for NEXT_COLUMN_TEXT_WRAP. Forces text to jump to the 
			 * next available column.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly nextColumnTextWrap: Adobe.Incopy.TextWrapModes;
			/**
			 * Alias for NONE. No text wrap.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.TextWrapModes;
			/**
			 * No text wrap.
			 * @type {Adobe.Incopy.TextWrapModes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.TextWrapModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}