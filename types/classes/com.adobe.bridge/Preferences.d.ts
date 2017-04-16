/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The preference properties listed here are the static 
		 * properties. Additional dynamic properties reflect the 
		 * prefereences that can be viewed in and controlled by 
		 * Preferences dialog. Some existing preferences can be set or 
		 * read by setting or retrieving the associated property value. 
		 * Not all existing preferences are available in the scripting 
		 * environment. Those that are available are listed in the 
		 * Adobe Bridge JavaScript Reference. Preference values do not 
		 * take effect until Adobe Bridge application is restarted.You 
		 * can set certain preference values for the current session 
		 * only. That is, the changes take effect immediately, but do 
		 * not persist across sessions. The next time the Adobe Bridge 
		 * application is restarted, the global preference value is 
		 * used.A script can create a new preference by simply 
		 * referencing a new property name in this object. New 
		 * preferences must be of the type String, Number, or Boolean. 
		 * Composite types (such as Rect and Point) are retrieved as 
		 * String objects.Access the Preferences object through the 
		 * app.preferences property.
		 */
		class Preferences extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {string}
			 */
			public AccentColor: string;
			/**
			 * @type {boolean}
			 */
			public AudioAutoLoop: boolean;
			/**
			 * @type {boolean}
			 */
			public AudioAutoPlay: boolean;
			/**
			 * @type {boolean}
			 */
			public AutoExportCaches: boolean;
			/**
			 * @type {number}
			 */
			public BackgroundColor: number;
			/**
			 * @type {string}
			 */
			public CacheDirectory: string;
			/**
			 * @type {number}
			 */
			public CacheSize: number;
			/**
			 * @type {number}
			 */
			public CompactThumbSize: number;
			/**
			 * @type {number}
			 */
			public DetailsViewThumbSize: number;
			/**
			 * @type {boolean}
			 */
			public ExportCacheToFolder: boolean;
			/**
			 * A set of metadata properties to be displayed beneath a 
			 * thumbnail icon.
			 * @type {any[]}
			 */
			public extraMetadata: any[];
			/**
			 * @type {number}
			 */
			public FileSize: number;
			/**
			 * @type {boolean}
			 */
			public HideEmptyFields: boolean;
			/**
			 * @type {boolean}
			 */
			public HideUnknownOpeners: boolean;
			/**
			 * @type {number}
			 */
			public ImageBackdrop: number;
			/**
			 * @type {string}
			 */
			public Keyboard: string;
			/**
			 * @type {boolean}
			 */
			public KeywordAutoParent: boolean;
			/**
			 * @type {any[]}
			 */
			public KeywordInputDelimiters: any[];
			/**
			 * @type {string}
			 */
			public KeywordOutputDelimiter: string;
			/**
			 * @type {boolean}
			 */
			public KeywordReadHierarchical: boolean;
			/**
			 * @type {boolean}
			 */
			public KeywordWriteHierarchical: boolean;
			/**
			 * @type {string}
			 */
			public Label1: string;
			/**
			 * @type {string}
			 */
			public Label2: string;
			/**
			 * @type {string}
			 */
			public Label3: string;
			/**
			 * @type {string}
			 */
			public Label4: string;
			/**
			 * @type {string}
			 */
			public Label5: string;
			/**
			 * @type {boolean}
			 */
			public LabelCtrlKey: boolean;
			/**
			 * @type {string}
			 */
			public Language: string;
			/**
			 * @type {number}
			 */
			public ListViewThumbSize: number;
			/**
			 * @type {boolean}
			 */
			public ModClickToLoupe: boolean;
			/**
			 * @type {number}
			 */
			public MRUCount: number;
			/**
			 * @type {number}
			 */
			public MRUCount_2_0: number;
			/**
			 * @type {number}
			 */
			public PreferencePanel: number;
			/**
			 * @type {boolean}
			 */
			public ShowCameraRawInterface: boolean;
			/**
			 * @type {boolean}
			 */
			public ShowLabels: boolean;
			/**
			 * Whether to show thumbnail name beneath thumbnail icons.
			 * @type {boolean}
			 */
			public showName: boolean;
			/**
			 * @type {boolean}
			 */
			public ShowPlacard: boolean;
			/**
			 * @type {boolean}
			 */
			public ShowToolTips: boolean;
			/**
			 * @type {number}
			 */
			public StackFrameRate: number;
			/**
			 * @type {number}
			 */
			public ThrottleDelayGoodChildren: number;
			/**
			 * @type {number}
			 */
			public ThrottleDelayNewChildren: number;
			/**
			 * @type {number}
			 */
			public ThrottleLongDelayGoodChildren: number;
			/**
			 * The quality of thumbnail image to generate.
			 * @type {string}
			 */
			public thumbnailQuality: string;
			/**
			 * @type {string}
			 */
			public ThumbnailQuality: string;
			/**
			 * @type {number}
			 */
			public ThumbnailViewThumbSize: number;
			/**
			 * @type {number}
			 */
			public UIBrightness: number;
			/**
			 * @type {boolean}
			 */
			public UseHighQualityPreviews: boolean;
			/**
			 * @type {boolean}
			 */
			public UseLocalCaches: boolean;
			/**
			 * @type {boolean}
			 */
			public UseSoftwareRendering: boolean;
			/**
			 * @type {boolean}
			 */
			public VideoAutoLoop: boolean;
			/**
			 * @type {boolean}
			 */
			public VideoAutoPlay: boolean;
			/**
			 * Removes script-created keys and values from the Adobe Bridge 
			 * preferences, or resets preferences.
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * Resets file type associations to their default values.
			 * @returns {void}
			 */
			public resetFileAssociations(): void;
			/**
			 * Resets "Do not show again" settings to false for all warning 
			 * dialogs.
			 * @returns {void}
			 */
			public resetWarningDialogs(): void;
		}
	}
}