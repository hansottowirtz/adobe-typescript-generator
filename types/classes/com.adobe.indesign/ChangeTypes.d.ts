/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeTypes extends Adobe.Csawlib.CSEnumBase {
			/** Deleted text. */
			public static readonly DELETED_TEXT: Adobe.Indesign.ChangeTypes;
			/** Alias for DELETED_TEXT. Deleted text. */
			public static readonly deletedText: Adobe.Indesign.ChangeTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Added text. */
			public static readonly INSERTED_TEXT: Adobe.Indesign.ChangeTypes;
			/** Alias for INSERTED_TEXT. Added text. */
			public static readonly insertedText: Adobe.Indesign.ChangeTypes;
			/** Moved text. */
			public static readonly MOVED_TEXT: Adobe.Indesign.ChangeTypes;
			/** Alias for MOVED_TEXT. Moved text. */
			public static readonly movedText: Adobe.Indesign.ChangeTypes;
			/** Constructor */
			public constructor();
		}
	}
}