import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'IronBeat';
  assessmentHighlights = [
    'Movement screen for push, pull, squat, hinge, and core stability',
    'Strength benchmarks for strict push-ups, pull-up readiness, dips, and plank endurance',
    'Mobility, injury history, and weekly training time capture',
    'Goal alignment for strength, aesthetics, skill mastery, or endurance'
  ];
  skillChains = [
    {
      title: 'Push Chain',
      focus: 'Pressing strength and shoulder stability',
      levels: ['Wall → Incline → Push-up', 'Diamond → Archer → Pseudo planche', 'One-arm → Full planche → Planche push-ups']
    },
    {
      title: 'Pull Chain',
      focus: 'Vertical pulling power and scapular control',
      levels: ['Dead hang → Scapular pulls → Negative pull-up', 'Pull-up → Archer → Typewriter', 'One-arm → Front lever → Muscle-up']
    },
    {
      title: 'Squat/Leg Chain',
      focus: 'Single-leg strength, balance, and mobility',
      levels: ['Bodyweight → Bulgarian split → Assisted pistol', 'Full pistol → Shrimp → Sissy', 'Advanced pistols → Dragon pistols → Weighted']
    },
    {
      title: 'Core/Compression',
      focus: 'Midline endurance and compression strength',
      levels: ['Plank → Hollow hold → Leg raises', 'L-sit → V-sit → Dragon flags', 'Manna → Human flag → Elite progressions']
    }
  ];
  programmingPillars = [
    {
      title: 'Weekly Structure Generator',
      points: [
        'Auto-balances push, pull, legs, and core based on goals',
        'Daily undulating periodization with deloads every 4-6 weeks',
        'Smart recovery guardrails for sustainable progress'
      ]
    },
    {
      title: 'Progressive Overload Engines',
      points: [
        'Volume, intensity, tempo, and ROM progression paths',
        'Mechanical leverage adjustments for precision overload',
        'Rest manipulation to expand work capacity'
      ]
    },
    {
      title: 'Adaptive Logic',
      points: [
        'Advance after 3 successful sessions',
        'Maintain when targets are near-missed',
        'Regress or swap on repeated failure'
      ]
    }
  ];
  workoutFeatures = [
    'Real-time timers with 3-2-1 prep countdowns',
    'Form cues, reminders, and optional rep counting',
    'Notes, RPE tracking, and readiness adjustments',
    'Optional form analysis and regression recommendations'
  ];
  trackingFeatures = [
    {
      title: 'Quantitative Metrics',
      items: ['Volume load and weekly rep totals', 'PR tracking for reps and holds', 'Consistency streaks and adherence']
    },
    {
      title: 'Qualitative Feedback',
      items: ['Soreness heatmap', 'Energy and sleep correlation', 'Motivation and pain reporting']
    },
    {
      title: 'Visual Progress',
      items: ['Skill tree visualization', 'Strength curve charts', 'Achievement milestones']
    }
  ];
  educationResources = [
    {
      title: 'Movement Library',
      items: ['100+ exercise demos', 'Progression/regression ladders', 'Common mistakes and fixes']
    },
    {
      title: 'Knowledge Base',
      items: ['Overload principles', 'Recovery and nutrition basics', 'Injury prevention protocols']
    }
  ];
  communityFeatures = [
    'Challenge modes with badges and XP',
    'Optional progress sharing and leaderboard ranking',
    'Partner matching and form-check reviews'
  ];
  smartFeatures = [
    {
      title: 'AI Training Assistant',
      items: ['Programming Q&A', 'Exercise substitutions', 'Injury modifications', 'Motivational check-ins']
    },
    {
      title: 'Recovery Optimization',
      items: ['Readiness scoring', 'Sleep integration', 'Auto-adjusted intensity', 'Mobility prescriptions']
    },
    {
      title: 'Equipment Flexibility',
      items: ['Home/park/gym modes', 'Minimal-equipment swaps', 'DIY equipment guides']
    }
  ];
  roadmap = [
    {
      title: 'MVP Launch',
      items: [
        'User assessment + goal setting',
        'Weekly program generation',
        'Workout tracking with timers',
        'Video exercise library',
        'Progress dashboard',
        'Skill tree visualization'
      ]
    },
    {
      title: 'Phase 2',
      items: ['AI form analysis', 'Community layer', 'Advanced analytics', 'Nutrition integration', 'Wearable sync']
    },
    {
      title: 'Phase 3',
      items: ['AR form overlay', 'Live coaching', 'Advanced AI plans', 'Marketplace expansion']
    }
  ];
  heroStats = [
    { label: 'Assessment Modules', value: '6' },
    { label: 'Skill Progressions', value: '40+' },
    { label: 'Adaptive Rules', value: '30+' },
    { label: 'Workout Modes', value: '4' }
  ];
  valueProps = [
    {
      title: 'Progressive Overload, Perfected',
      description: 'Personalized progression that adapts weekly based on performance, recovery, and goals.'
    },
    {
      title: 'Skill-Tree Mastery',
      description: 'Unlock new movement tiers with biomechanical checkpoints and clear prerequisites.'
    },
    {
      title: 'Coach-Level Guidance',
      description: 'Form cues, readiness insights, and recovery coaching make every session smarter.'
    }
  ];

  missions = [
    'Transform beginners into elite calisthenics athletes with science-backed progressions.',
    'Deliver biomechanically sound movement patterns that protect joints and build longevity.',
    'Keep training frictionless with intelligent programming and celebratory UI feedback.'
  ];
}
