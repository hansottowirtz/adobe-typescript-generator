/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SaveFileType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Saves the file as an InCopy document with an ICML extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly INCOPY_MARKUP: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as an InCopy template with an INCT extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly INCOPY_TEMPLATE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for INCOPY_MARKUP. Saves the file as an InCopy 
			 * document with an ICML extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly incopyMarkup: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for INCOPY_TEMPLATE. Saves the file as an InCopy 
			 * template with an INCT extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly incopyTemplate: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file in the application's native file type.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly NATIVE_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for NATIVE_FILE_TYPE. Saves the file in the 
			 * application's native file type.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly nativeFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as an InDesign document (with the file 
			 * extension INDD).
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly PUBLICATION_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for PUBLICATION_FILE_TYPE. Saves the file as an 
			 * InDesign document (with the file extension INDD).
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly publicationFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as a rich text format file with an RTF 
			 * extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly RTF_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for RTF_FILE_TYPE. Saves the file as a rich text 
			 * format file with an RTF extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly rtfFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as a text file with a TXT extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly TEXT_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for TEXT_FILE_TYPE. Saves the file as a text file with 
			 * a TXT extension.
			 * @type {Adobe.Incopy.SaveFileType}
			 * @readonly
			 */
			public static readonly textFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}