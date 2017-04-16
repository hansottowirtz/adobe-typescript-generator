/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			public AccentColor: string;
			public AudioAutoLoop: boolean;
			public AudioAutoPlay: boolean;
			public AutoExportCaches: boolean;
			public BackgroundColor: number;
			public CacheDirectory: string;
			public CacheSize: number;
			public CompactThumbSize: number;
			public DetailsViewThumbSize: number;
			public ExportCacheToFolder: boolean;
			/**
			 * A set of metadata properties to be displayed beneath a 
			 * thumbnail icon.
			 */
			public extraMetadata: any[];
			public FileSize: number;
			public HideEmptyFields: boolean;
			public HideUnknownOpeners: boolean;
			public ImageBackdrop: number;
			public Keyboard: string;
			public KeywordAutoParent: boolean;
			public KeywordInputDelimiters: any[];
			public KeywordOutputDelimiter: string;
			public KeywordReadHierarchical: boolean;
			public KeywordWriteHierarchical: boolean;
			public Label1: string;
			public Label2: string;
			public Label3: string;
			public Label4: string;
			public Label5: string;
			public LabelCtrlKey: boolean;
			public Language: string;
			public ListViewThumbSize: number;
			public ModClickToLoupe: boolean;
			public MRUCount: number;
			public MRUCount_2_0: number;
			public PreferencePanel: number;
			public ShowCameraRawInterface: boolean;
			public ShowLabels: boolean;
			/** Whether to show thumbnail name beneath thumbnail icons. */
			public showName: boolean;
			public ShowPlacard: boolean;
			public ShowToolTips: boolean;
			public StackFrameRate: number;
			public ThrottleDelayGoodChildren: number;
			public ThrottleDelayNewChildren: number;
			public ThrottleLongDelayGoodChildren: number;
			/** The quality of thumbnail image to generate. */
			public thumbnailQuality: string;
			public ThumbnailQuality: string;
			public ThumbnailViewThumbSize: number;
			public UIBrightness: number;
			public UseHighQualityPreviews: boolean;
			public UseLocalCaches: boolean;
			public UseSoftwareRendering: boolean;
			public VideoAutoLoop: boolean;
			public VideoAutoPlay: boolean;
			/**
			 * Removes script-created keys and values from the Adobe Bridge 
			 * preferences, or resets preferences.
			 */
			public clear(): void;
			/** Resets file type associations to their default values. */
			public resetFileAssociations(): void;
			/**
			 * Resets "Do not show again" settings to false for all warning 
			 * dialogs.
			 */
			public resetWarningDialogs(): void;
		}
	}
}