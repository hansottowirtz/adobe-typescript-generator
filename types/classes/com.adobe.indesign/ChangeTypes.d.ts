/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Deleted text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly DELETED_TEXT: Adobe.Indesign.ChangeTypes;
			/**
			 * Alias for DELETED_TEXT. Deleted text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly deletedText: Adobe.Indesign.ChangeTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Added text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly INSERTED_TEXT: Adobe.Indesign.ChangeTypes;
			/**
			 * Alias for INSERTED_TEXT. Added text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly insertedText: Adobe.Indesign.ChangeTypes;
			/**
			 * Moved text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly MOVED_TEXT: Adobe.Indesign.ChangeTypes;
			/**
			 * Alias for MOVED_TEXT. Moved text.
			 * @type {Adobe.Indesign.ChangeTypes}
			 * @readonly
			 */
			public static readonly movedText: Adobe.Indesign.ChangeTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}