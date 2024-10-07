<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="calendar bg-white p-6 rounded-lg shadow-lg">
      <!-- Header -->
      <div class="header flex justify-between items-center mb-4">
        <div class="year-month text-4xl font-semibold"></div>
        <div class="nav flex">
          <button class="nav-btn px-3 py-1 border border-gray-400 rounded-l-lg hover:bg-gray-200"
            @click="prevMonth">&lt;</button>
          <button class="go-today px-3 py-1 border border-gray-400 hover:bg-gray-200"
            @click="goToday">Today</button>
          <button class="nav-btn px-3 py-1 border border-gray-400 rounded-r-lg hover:bg-gray-200"
            @click="nextMonth">&gt;</button>
        </div>
      </div>

      <!-- Days of the Week -->
      <div class="days grid grid-cols-7 text-center text-lg text-gray-700 mb-2">
        <div class="day text-red-500">일</div>
        <div class="day">월</div>
        <div class="day">화</div>
        <div class="day">수</div>
        <div class="day">목</div>
        <div class="day">금</div>
        <div class="day text-blue-500">토</div>
      </div>

      <!-- Dates -->
      <div class="dates grid grid-cols-7 gap-px border-t border-r border-gray-400">
        <div v-for="(date, i) in datesHtml" :key="i"
          :class="[
              'date', 
              'p-4', 
              'text-center', 
              'border-b', 
              'border-l', 
              'border-gray-400',
              isToday(date) ? 'today' : '', 
              isSelected(date) ? 'bg-blue-100 rounded-lg p-1' : '', 
              getDateClass(i, date.type)
          ]"
          @click="handleDateClick(date, i)">
          <div>
            {{ date.number }}
          </div>
          <!-- 주말을 제외한 날짜에 등록/미등록 뱃지를 표시 -->
          <div v-if="!isWeekend(i) && date.type === 'current'">
            <span v-if="hasMenuData(date)" class="badge bg-green-500 text-white rounded-full px-2 py-1 mt-2">등록</span>
            <span v-else class="badge bg-red-500 text-white rounded-full px-2 py-1 mt-2">미등록</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ModalMenu v-if="isModalOpen" @close="isModalOpen = false" :selectedDate="selectedDate" :selectedDay="selectedDay" />
  </div>
</template>

<script>
import ModalMenu from '@/components/admin/modal/ModalMenu.vue';

export default {
  components: {
    ModalMenu,
  },
  data() {
    return {
      date: new Date(),
      datesHtml: [],
      selectedDate: null,
      selectedDay: null,
      isModalOpen: false, // 모달 창 상태
      // 가상 menuData (이 데이터를 실제 서버에서 받아오거나 계산하여 채워넣음)
      menuData: {
        2: true, // 예시로 2일에 메뉴가 등록된 경우
        3: false, // 3일에 메뉴가 미등록된 경우
      }
    };
  },
  methods: {
    renderCalender() {
      const viewYear = this.date.getFullYear();
      const viewMonth = this.date.getMonth();

      document.querySelector(".year-month").textContent = `${viewYear}년 ${viewMonth + 1}월`;

      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisFirst = new Date(viewYear, viewMonth, 1);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);

      const PLDate = prevLast.getDate();
      const TLDate = thisLast.getDate();
      const TFDay = thisFirst.getDay();
      const TLDay = thisLast.getDay();

      const prevDates = [];
      const thisDates = [...Array(TLDate + 1).keys()].slice(1);
      const nextDates = [];

      // 이전 달의 날짜 계산
      if (TFDay !== 0) {
        for (let i = 0; i < TFDay; i++) {
          prevDates.unshift({
            number: PLDate - i,
            type: 'prev'
          });
        }
      }

      // 다음 달의 날짜 계산
      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push({
          number: i,
          type: 'next'
        });
      }

      this.datesHtml = [...prevDates, ...thisDates.map(date => ({ number: date, type: 'current' })), ...nextDates];
    },
    isToday(date) {
      const today = new Date();
      const viewMonth = this.date.getMonth();
      const viewYear = this.date.getFullYear();

      return date.number === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear() && date.type === 'current';
    },
    isSelected(date) {
      return this.selectedDate === date.number && date.type === 'current';
    },
    selectDate(date) {
      if (date.type === 'current') {
        this.selectedDate = date.number;
      }
    },
    handleDateClick(date, index) {
      if (this.selectedDate === date.number) {
        this.selectedDay = this.getDayName(index);
        this.isModalOpen = true;  // 이미 선택된 날짜를 다시 클릭하면 모달 열기
      } else {
        this.selectDate(date); // 처음 선택 시 날짜만 선택
      }
    },
    prevMonth() {
      this.date.setMonth(this.date.getMonth() - 1);
      this.renderCalender();
    },
    nextMonth() {
      this.date.setMonth(this.date.getMonth() + 1);
      this.renderCalender();
    },
    goToday() {
      this.date = new Date();
      this.renderCalender();
    },
    getDateClass(index, type) {
      if (type === 'prev' || type === 'next') {
        return 'text-gray-400';
      }

      // 토요일
      if (index % 7 === 6) {
        return 'text-blue-500';
      }

      // 일요일
      if (index % 7 === 0) {
        return 'text-red-500';
      }
      return '';
    },
    getDayName(index) {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      return days[index % 7];
    },
    isWeekend(index) {
      return index % 7 === 0 || index % 7 === 6;
    },
    // 임시로 menuData의 true false로 그저 flag체크
    hasMenuData(date) {
      return this.menuData[date.number] !== undefined ? this.menuData[date.number] : false;
    }
  },
  mounted() {
    this.renderCalender();
  },
};
</script>

<style>
.today {
  color: red;
  text-align: center;
}
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  border-radius: 9999px;
}
</style>
