/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CharacterCountLocation extends Adobe.Csawlib.CSEnumBase {
			/** Displays the character count at the bottom of the frame. */
			public static readonly BOTTOM_ALIGN: Adobe.Indesign.CharacterCountLocation;
			/**
			 * Alias for BOTTOM_ALIGN. Displays the character count at the 
			 * bottom of the frame.
			 */
			public static readonly bottomAlign: Adobe.Indesign.CharacterCountLocation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays the character count on the left side of the frame. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.CharacterCountLocation;
			/**
			 * Alias for LEFT_ALIGN. Displays the character count on the 
			 * left side of the frame.
			 */
			public static readonly leftAlign: Adobe.Indesign.CharacterCountLocation;
			/** Alias for NONE. Hides the character count. */
			public static readonly none: Adobe.Indesign.CharacterCountLocation;
			/** Hides the character count. */
			public static readonly NONE: Adobe.Indesign.CharacterCountLocation;
			/**
			 * Displays the character count on the right side of the frame.
			 */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.CharacterCountLocation;
			/**
			 * Alias for RIGHT_ALIGN. Displays the character count on the 
			 * right side of the frame.
			 */
			public static readonly rightAlign: Adobe.Indesign.CharacterCountLocation;
			/** Displays the character count at the top of the frame. */
			public static readonly TOP_ALIGN: Adobe.Indesign.CharacterCountLocation;
			/**
			 * Alias for TOP_ALIGN. Displays the character count at the top 
			 * of the frame.
			 */
			public static readonly topAlign: Adobe.Indesign.CharacterCountLocation;
			/** Constructor */
			public constructor();
		}
	}
}