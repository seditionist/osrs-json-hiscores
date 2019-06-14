import { parseStats, getRSNFormat, getSkillPage } from '../src/index';
import { PlayerSkillRow } from '../src/types';

test('Parse CSV to json', () => {
  const csv = `40258,2063,218035714
  20554, 99, 21102621
  39059, 99, 15364425
  14245, 99, 26556827
  19819, 99, 33511407
  27857, 99, 25774115
  44278, 91, 6081159
  40110, 99, 15128024
  178948, 90, 5347474
  175463, 81, 2355494
  138677, 90, 5356303
  77587, 91, 5904710
  158478, 85, 3570485
  93958, 83, 2684426
  39179, 88, 4425107
  138406, 77, 1591377
  33399, 90, 5866307
  1794, 99, 15057674
  45551, 91, 6363261
  121165, 90, 5748493
  89460, 88, 4624078
  53099, 80, 2008229
  169127, 73, 1067670
  115543, 82, 2546048
    -1, -1
    -1, -1
  32875, 500
  24817, 476
  212728, 1
  94827, 20
  59099, 74
  24642, 231
  5206, 99
  6293, 51`;

  expect(parseStats(csv)).toStrictEqual({
    skills: {
      overall: { rank: 40258, level: 2063, xp: 218035714 },
      attack: { rank: 20554, level: 99, xp: 21102621 },
      defence: { rank: 39059, level: 99, xp: 15364425 },
      strength: { rank: 14245, level: 99, xp: 26556827 },
      hitpoints: { rank: 19819, level: 99, xp: 33511407 },
      ranged: { rank: 27857, level: 99, xp: 25774115 },
      prayer: { rank: 44278, level: 91, xp: 6081159 },
      magic: { rank: 40110, level: 99, xp: 15128024 },
      cooking: { rank: 178948, level: 90, xp: 5347474 },
      woodcutting: { rank: 175463, level: 81, xp: 2355494 },
      fletching: { rank: 138677, level: 90, xp: 5356303 },
      fishing: { rank: 77587, level: 91, xp: 5904710 },
      firemaking: { rank: 158478, level: 85, xp: 3570485 },
      crafting: { rank: 93958, level: 83, xp: 2684426 },
      smithing: { rank: 39179, level: 88, xp: 4425107 },
      mining: { rank: 138406, level: 77, xp: 1591377 },
      herblore: { rank: 33399, level: 90, xp: 5866307 },
      agility: { rank: 1794, level: 99, xp: 15057674 },
      thieving: { rank: 45551, level: 91, xp: 6363261 },
      slayer: { rank: 121165, level: 90, xp: 5748493 },
      farming: { rank: 89460, level: 88, xp: 4624078 },
      runecraft: { rank: 53099, level: 80, xp: 2008229 },
      hunter: { rank: 169127, level: 73, xp: 1067670 },
      construction: { rank: 115543, level: 82, xp: 2546048 },
    },
    bh: {
      rogue: { rank: -1, score: -1 },
      hunter: { rank: -1, score: -1 },
    },
    lms: { rank: 32875, score: 500 },
    clues: {
      all: { rank: 24817, score: 476 },
      beginner: { rank: 212728, score: 1 },
      easy: { rank: 94827, score: 20 },
      medium: { rank: 59099, score: 74 },
      hard: { rank: 24642, score: 231 },
      elite: { rank: 5206, score: 99 },
      master: { rank: 6293, score: 51 },
    },
  });
});

test('Get rsn format', async done => {
  const callback = (data: string) => {
    expect(data).toBe('Lynx Titan');
    done();
  };

  getRSNFormat('lYnX tiTaN').then(callback);
});

test('Get attack top page', async done => {
  const callback = (data: PlayerSkillRow[]) => {
    expect(data).toStrictEqual([
      { rsn: 'Heur', rank: 1, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Unohdettu2',
        rank: 2,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'Drakon', rank: 3, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Ame Umehara',
        rank: 4,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'Jakee', rank: 5, level: 99, xp: 200000000, dead: false },
      { rsn: 'Hitsuji', rank: 6, level: 99, xp: 200000000, dead: false },
      { rsn: 'Howson', rank: 7, level: 99, xp: 200000000, dead: false },
      { rsn: 'Dr PFAFF', rank: 8, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Malt Lickeys',
        rank: 9,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'Burned', rank: 10, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Blue Limes',
        rank: 11,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'Mini Finbarr',
        rank: 12,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'Unohdettu3',
        rank: 13,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'Eslihero',
        rank: 14,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'Lynx Titan',
        rank: 15,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'AndrewWigins',
        rank: 16,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'iMelee', rank: 17, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Portuguese',
        rank: 18,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'MarkoOSRS',
        rank: 19,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'Cairo', rank: 20, level: 99, xp: 200000000, dead: false },
      {
        rsn: 'Hey Jase',
        rank: 21,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'Sleighur',
        rank: 22,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      {
        rsn: 'KMSat200mALL',
        rank: 23,
        level: 99,
        xp: 200000000,
        dead: false,
      },
      { rsn: 'Yumemi', rank: 24, level: 99, xp: 200000000, dead: false },
      { rsn: 'Fiiggy', rank: 25, level: 99, xp: 200000000, dead: false },
    ]);
    done();
  };

  getSkillPage('attack').then(callback);
});
