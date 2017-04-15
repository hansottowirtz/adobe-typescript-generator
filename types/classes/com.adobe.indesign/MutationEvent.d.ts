/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MutationEvent extends Adobe.Indesign.Event {
			/**
			 * Dispatched when the value of a property changes on this 
			 * MutationEvent. This event bubbles. This event is not 
			 * cancelable.
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/** The name of the property that changed. */
			public readonly attributeName: string;
			/** The current value of the property that changed. */
			public readonly attributeValue: any;
			/**
			 * If true, the event supports the bubbling phase of 
			 * propagation.
			 */
			public readonly bubbles: boolean;
			/**
			 * If true, the default behavior of the event on its target can 
			 * be canceled.
			 */
			public readonly cancelable: boolean;
			/** The current propagation target of the event. */
			public readonly currentTarget: any;
			/**
			 * If true, the default behavior of the event on its target has 
			 * been canceled.
			 */
			public readonly defaultPrevented: boolean;
			/** The current propagation phase of the event. */
			public readonly eventPhase: Adobe.Indesign.EventPhases;
			/** The name of the event. */
			public readonly eventType: string;
			/** The unique ID of the MutationEvent. */
			public readonly id: number;
			/**
			 * The index of the MutationEvent within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the MutationEvent (a Object, UIDBasedObject, 
			 * CellStyleGroup, CellStyle, TableStyleGroup, ConditionSet, 
			 * HiddenText, Condition, MotionPreset, AssignedStory, 
			 * Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, 
			 * Snippet, Dialog, Swatch, Color, Tint, Gradient, 
			 * MixedInkGroup, MixedInk, Behavior, GotoPageBehavior, 
			 * GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, 
			 * GotoStateBehavior, GotoPreviousStateBehavior, 
			 * GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, 
			 * ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, 
			 * GotoPreviousViewBehavior, GotoNextViewBehavior, 
			 * GotoPreviousPageBehavior, GotoNextPageBehavior, 
			 * GotoLastPageBehavior, GotoFirstPageBehavior, 
			 * PreflightProfileRule, PreflightRuleInstance, 
			 * PreflightProfile, CrossReferenceFormat, 
			 * HyperlinkURLDestination, HyperlinkExternalPageDestination, 
			 * HyperlinkPageDestination, HyperlinkTextDestination, 
			 * ParagraphDestination, HyperlinkTextSource, 
			 * CrossReferenceSource, HyperlinkPageItemSource, Bookmark, 
			 * Hyperlink, IndexSection, PageReference, CrossReference, 
			 * Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, 
			 * ScriptMenuAction, NamedGrid, CompositeFontEntry, 
			 * CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, 
			 * TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, 
			 * Note, TableStyle, TextPath, Asset, Link, Section, 
			 * MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, 
			 * Language, PageItem, FormField, MultiStateObject, Button, 
			 * MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, 
			 * WMF, PDF, EPS, Image, Group, TextFrame, MasterSpread, 
			 * TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, 
			 * CharacterStyle, ParagraphStyle, Story, XmlStory, 
			 * IDBasedObject, DialogRow, DialogColumn, Widget, BorderPanel, 
			 * MeasurementEditbox, MeasurementCombobox, RealCombobox, 
			 * AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, 
			 * AngleCombobox, EnablingGroup, IntegerCombobox, 
			 * IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, 
			 * CheckboxControl, Dropdown, StaticText, TextEditbox, 
			 * BackgroundTask, State, RuleDataObject, XMLItem, DTD, 
			 * XMLInstruction, XMLComment, XMLElement, Table, Cell, 
			 * IdleTask, Event, ImportExportEvent, DocumentEvent, 
			 * MutationEvent, IdleEvent, PrintEvent, EventListener, 
			 * StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, 
			 * DashedStrokeStyle, GraphicLayer, NonIDBasedObject, 
			 * TimingTarget, TimingGroup, TimingList, OpacityGradientStop, 
			 * DataMergeField, DataMergeImagePlaceholder, 
			 * DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, 
			 * Window, StoryWindow, LayoutWindow, NavigationPoint, 
			 * PreflightProcess, PreflightRule, BuildingBlock, 
			 * DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, 
			 * MenuElement, MenuSeparator, MenuItem, Submenu, Menu, 
			 * TextVariable, XMLRuleMatchData, ValidationError, 
			 * XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, 
			 * Row, Column, Change, RootObject, Document, Application, 
			 * Book, Library, Preference, ConditionalTextPreference, 
			 * TimingSetting, AnimationSetting, XFLExportPreference, 
			 * SWFExportPreference, AlignDistributePreference, 
			 * GrabberPreference, 
			 * ObjectStyleContentEffectsCategorySettings, 
			 * ObjectStyleFillEffectsCategorySettings, 
			 * ObjectStyleStrokeEffectsCategorySettings, 
			 * ObjectStyleObjectEffectsCategorySettings, 
			 * ChapterNumberPreference, NumberingRestartPolicy, Bullet, 
			 * DataMerge, DataMergeOption, DataMergePreference, 
			 * JPEGExportPreference, TrackChangesPreference, 
			 * NotePreference, TransformPreference, ClipboardPreference, 
			 * GeneralPreference, WatermarkPreference, ButtonPreference, 
			 * PreflightBookOption, PreflightOption, XMLViewPreference, 
			 * DisplayPerformancePreference, IndexOptions, LinkMetadata, 
			 * MetadataPreference, ExcelImportPreference, 
			 * TaggedTextImportPreference, TaggedTextExportPreference, 
			 * WordRTFImportPreference, TextExportPreference, 
			 * TextImportPreference, FindChangeContentTransparencySetting, 
			 * FindChangeFillTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeTransparencySetting, GradientFeatherSetting, 
			 * FindChangeGradientFeatherSetting, DirectionalFeatherSetting, 
			 * FindChangeDirectionalFeatherSetting, 
			 * ContentTransparencySetting, SatinSetting, 
			 * FindChangeSatinSetting, BevelAndEmbossSetting, 
			 * FindChangeBevelAndEmbossSetting, InnerGlowSetting, 
			 * FindChangeInnerGlowSetting, OuterGlowSetting, 
			 * FindChangeOuterGlowSetting, InnerShadowSetting, 
			 * FindChangeInnerShadowSetting, FeatherSetting, 
			 * FindChangeFeatherSetting, DropShadowSetting, 
			 * FindChangeDropShadowSetting, BlendingSetting, 
			 * FindChangeBlendingSetting, FillTransparencySetting, 
			 * StrokeTransparencySetting, TransparencySetting, 
			 * TransparencyPreference, FlattenerPreference, 
			 * GalleyPreference, GridPrintingPreference, CjkGridPreference, 
			 * StoryGridDataInformation, LayoutGridDataInformation, 
			 * GridDataInformation, CaptionMetadataVariablePreference, 
			 * CustomTextVariablePreference, MatchParagraphStylePreference, 
			 * MatchCharacterStylePreference, FileNameVariablePreference, 
			 * DateVariablePreference, ChapterNumberVariablePreference, 
			 * PageNumberVariablePreference, FootnoteOption, 
			 * BaselineFrameGridOption, AnchoredObjectSetting, 
			 * AnchoredObjectDefault, ExportForWebPreference, 
			 * XMLPreference, XMLExportPreference, XMLImportPreference, 
			 * InCopyExportOption, LinkingPreference, 
			 * ChangeTransliteratePreference, ChangeObjectPreference, 
			 * ChangeGlyphPreference, ChangeGrepPreference, 
			 * ChangeTextPreference, FindTransliteratePreference, 
			 * FindObjectPreference, FindGlyphPreference, 
			 * FindGrepPreference, FindTextPreference, 
			 * FindChangeTransliterateOption, FindChangeObjectOption, 
			 * FindChangeGlyphOption, FindChangeGrepOption, 
			 * FindChangeTextOption, ColorSetting, ScriptArg, 
			 * ScriptPreference, PlaceGun, LayoutAdjustmentPreference, 
			 * StrokeFillProxySetting, ImportedPageAttribute, 
			 * EPSImportPreference, SmartGuidePreference, 
			 * AutoCorrectPreference, SpellPreference, PolygonPreference, 
			 * DictionaryPreference, MojikumiUiPreference, ContourOption, 
			 * TextWrapPreference, TextEditingPreference, 
			 * FrameFittingOption, PageItemDefault, 
			 * InteractivePDFExportPreference, PDFAttribute, 
			 * PDFPlacePreference, PDFExportPreference, IMEPreference, 
			 * GraphicLayerOption, ClippingPathSettings, ImageIOPreference, 
			 * ImagePreference, ToolBox, EPSExportPreference, 
			 * PrintBookletPrintPreference, PrintBookletOption, 
			 * PrintPreference, ViewPreference, PasteboardPreference, 
			 * MarginPreference, GuidePreference, GridPreference, 
			 * DocumentPreference, TextDefault, TextPreference, 
			 * TextFramePreference, StoryPreference, PathPoint, Path, 
			 * GradientStop, AutoCorrectTable, UserDictionary, 
			 * HyphenationException, Font, TransformationMatrix, 
			 * PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, 
			 * TextStyleRange, Paragraph, TextColumn, Line, Word, 
			 * Character, NestedGrepStyle or NestedLineStyle).
			 */
			public readonly parent: any;
			/**
			 * If true, propagation of the event beyond the current target 
			 * has been stopped.
			 */
			public readonly propagationStopped: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The target of the event. */
			public readonly target: any;
			/** The time the event was initialized. */
			public readonly timeStamp: Date;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Cancels the default behavior of the event on its target. */
			public preventDefault(): void;
			/** Stops propagation of the event beyond the current target. */
			public stopPropagation(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}