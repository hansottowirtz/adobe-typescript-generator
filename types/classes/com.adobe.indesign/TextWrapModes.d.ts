/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextWrapModes extends Adobe.Csawlib.CSEnumBase {
			/** Wraps text around the object's bounding box. */
			public static readonly BOUNDING_BOX_TEXT_WRAP: Adobe.Indesign.TextWrapModes;
			/**
			 * Alias for BOUNDING_BOX_TEXT_WRAP. Wraps text around the 
			 * object's bounding box.
			 */
			public static readonly boundingBoxTextWrap: Adobe.Indesign.TextWrapModes;
			/**
			 * Alias for CONTOUR. Wraps text around the object following 
			 * the specified contour options.
			 */
			public static readonly contour: Adobe.Indesign.TextWrapModes;
			/**
			 * Wraps text around the object following the specified contour 
			 * options.
			 */
			public static readonly CONTOUR: Adobe.Indesign.TextWrapModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Forces text to jump above or below the object, so that no 
			 * text appears on the object's right or left.
			 */
			public static readonly JUMP_OBJECT_TEXT_WRAP: Adobe.Indesign.TextWrapModes;
			/**
			 * Alias for JUMP_OBJECT_TEXT_WRAP. Forces text to jump above 
			 * or below the object, so that no text appears on the object's 
			 * right or left.
			 */
			public static readonly jumpObjectTextWrap: Adobe.Indesign.TextWrapModes;
			/** Forces text to jump to the next available column. */
			public static readonly NEXT_COLUMN_TEXT_WRAP: Adobe.Indesign.TextWrapModes;
			/**
			 * Alias for NEXT_COLUMN_TEXT_WRAP. Forces text to jump to the 
			 * next available column.
			 */
			public static readonly nextColumnTextWrap: Adobe.Indesign.TextWrapModes;
			/** Alias for NONE. No text wrap. */
			public static readonly none: Adobe.Indesign.TextWrapModes;
			/** No text wrap. */
			public static readonly NONE: Adobe.Indesign.TextWrapModes;
			/** Constructor */
			public constructor();
		}
	}
}